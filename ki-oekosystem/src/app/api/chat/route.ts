import { NextRequest, NextResponse } from "next/server";
import { ChatOpenAI } from "@langchain/openai";

interface ChatRequestBody {
  message: string;
}
interface ChatResponseBody {
  answer: string;
  error?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ChatRequestBody>;
    const message = (body?.message ?? "").toString().trim();

    if (!message) {
      return NextResponse.json<ChatResponseBody>(
        { answer: "", error: "Fehler: 'message' ist erforderlich." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json<ChatResponseBody>(
        { answer: "", error: "Server-Setup-Fehler: OPENAI_API_KEY fehlt." },
        { status: 500 }
      );
    }

    const model = new ChatOpenAI({
      apiKey,
      model: "gpt-4o-mini",
      temperature: 0.2,
      maxTokens: 200,
    });

    const aiMessage = await model.invoke(
      `Antworte kurz und auf Deutsch: "${message}"`
    );

    const answer =
      typeof aiMessage.content === "string"
        ? aiMessage.content
        : Array.isArray(aiMessage.content)
        ? aiMessage.content
            .map((c: unknown) =>
              typeof c === "object" && c && "text" in (c as Record<string, unknown>)
                ? String((c as Record<string, unknown>).text ?? "")
                : ""
            )
            .join(" ")
            .trim()
        : "";

    if (!answer) {
      return NextResponse.json<ChatResponseBody>(
        { answer: "", error: "Die Modell-Antwort war leer." },
        { status: 502 }
      );
    }

    return NextResponse.json<ChatResponseBody>({ answer }, { status: 200 });
  } catch (e) {
    const err = e instanceof Error ? e : new Error("Unbekannter Fehler");
    return NextResponse.json<ChatResponseBody>(
      { answer: "", error: `Fehler: ${err.message}` },
      { status: 500 }
    );
  }
}


