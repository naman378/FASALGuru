import { iframeHeight } from "../constants";

export default function VoiceAssistantModule() {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-b">
        <h2 className="text-xl font-bold">🎤 Voice Assistant - Jarvis AI</h2>
        <p className="text-sm opacity-90">Talk to AI farm advisor</p>
      </div>
      <iframe
        src="https://fasalguru-jarvisai.hf.space"
        className={`w-full flex-1 border-0 ${iframeHeight}`}
        title="Voice Assistant"
        allow="camera *; microphone *"
      />
    </div>
  );
}
