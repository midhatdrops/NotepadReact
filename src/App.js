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
    <div className="back">
  <ul>
  {notes.map( note => (
    <li key={note.dia}>{note.text}</li>
  )
  )}
    <input id="note_text"></input>
    <button onClick={() => Salvar()}>Salvar</button>
    <button onClick={() => Delete()}>Deletar</button>
  </ul>
    </div>
  );
}



