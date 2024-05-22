import Image from "next/image";

export default function Home() {
  return (
    <div>
    <h1>Hello</h1>
    <button class="btn btn-info">Info</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-error">Error</button>
<span className="countdown font-mono text-6xl">
  <span style={{"--value":51}}></span>
</span>
</div>
  );
}
