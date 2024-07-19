import { Button } from "../button";

export function Header() {
  return (
    <div className="w-full flex justify-between py-4 px-16 shadow">
      <div>
        <h1 className="text-lg">Quiz Wold</h1>
      </div>
      <nav className="flex gap-2">
        <input className="w-64 border border-gray-400 rounded px-4" type="text" placeholder="pesqueise por quizzs"/>
        <Button>Cadastrar</Button>
        <Button style="bottomless">Entrar</Button>
      </nav>
    </div>
  )
}