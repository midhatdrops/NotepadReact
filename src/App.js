import React,{useState} from 'react';
import './styles.css'


export default function App() {
  const useStored = JSON.parse(window.localStorage.getItem('notes'))
  let [notes, setNotes] = useState(useStored)
  if(notes === null ) (notes = [])


  function Salvar() {
      window.localStorage.removeItem('notes')
      const text = document.querySelector('#note_text').value
      const dia = Date.now()
      let id = 0 
      notes.length === 0 ? id = 0 : id = notes.length
      const att = []
      att.push(...notes,{text,dia, id})
      window.localStorage.setItem('notes', JSON.stringify(att))
      console.log(att)
      return setNotes(att)
    }

    function Delete() {
      window.localStorage.removeItem('notes')
      setNotes([])
      return console.log('Local storage deletado')
    }
  


  return (
    <>
    <div className="back">
      <div className="title">Notepad</div>
      <br /><br/>
  <ul>
  {notes.map( note => (
    <article key={note.id}>{note.text}</article>
  )
  )}</ul></div>
  <br /><br/>
  <div className="clickers">
    <input id="note_text" type="text" placeholder="Digite o texto aqui"></input>
    </div><br /><br />
    <div className="clickers">
      <div className="internclicker">
    <button onClick={() => Salvar()}>Salvar</button>
    <button onClick={() => Delete()}>Deletar</button>
    </div>
    </div>
    </>
  );
}



