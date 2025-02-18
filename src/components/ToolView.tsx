import { Eye, EyeClosed, Pen } from "lucide-react";
import { useStore } from "../store/useStore";

export default function ToolView() {
    const { eyeOpened, setEyeOpened } = useStore();
    
    return (
        <div style={{ position: "absolute", height: "100vh", width: "100vw" }}>
            <button
                style={{
                    position: "relative",
                    top: 20,
                    left: 20,
                    backgroundColor: "#6E82FE",
                    color: "white",
                    border: "none",
                    padding: "10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    zIndex: 1
                }}
            >
                <Pen />
            </button>

            <button
                style={{
                    position: "relative",
                    top: 20,
                    left: 40,
                    backgroundColor: "#343A40",
                    color: "white",
                    border: "none",
                    padding: "10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    zIndex: 1
                }}
                onClick={() => setEyeOpened(!eyeOpened)}
            >
                {!eyeOpened ? <Eye /> : <EyeClosed />}
            </button>
        </div>
    );
}
