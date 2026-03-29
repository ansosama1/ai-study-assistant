const API_KEY = "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";

async function callAI(prompt) {
    const output = document.getElementById("output");
    output.innerHTML = "⏳ Processing...";

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "openai/gpt-3.5-turbo",
                messages: [
                    { role: "user", content: prompt }
                ]
            })
        });

        const data = await response.json();
        output.innerHTML = data.choices[0].message.content;

    } catch (error) {
        output.innerHTML = "❌ Error: " + error.message;
    }
}

// 🧠 Summarize
function summarize() {
    const text = document.getElementById("input").value;
    callAI(`Summarize this clearly:\n${text}`);
}

// ❓ Generate Questions
function generateQuestions() {
    const text = document.getElementById("input").value;
    callAI(`Create 5 smart study questions from this:\n${text}`);
}

// 👶 Explain Like I'm 5
function explainSimple() {
    const text = document.getElementById("input").value;
    callAI(`Explain this in a very simple way like I'm 5 years old:\n${text}`);
}