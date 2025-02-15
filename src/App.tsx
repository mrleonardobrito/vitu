import ToolView from "./components/ToolView";
import AppCanvas from "./components/AppCanvas";

export default function Home() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <ToolView/>
            <AppCanvas/>
        </div>
    );
}
