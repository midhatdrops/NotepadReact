import React,{useState} from 'react';
import './styles.css'


export default function App() {
  const useStored = JSON.parse(window.localStorage.getItem('notes'))
  let [notes, setNotes] = useState(useStored)
  if(notes === null ) (notes = [])


  function Salvar() {
      window.localStorage.removeItem('notes')
      const text = document.querySelector('#note_text').value
      if(text === '') return alert('Você não pode inserir dados vazios!')
      const dia = Date(Date.now())
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

    function filtro(id) {
      const novofiltro  = notes.filter( (elem) => {
          return elem.id !== id
  }
      )
      return setNotes(novofiltro)
  }
  


  return (
    <>
    <div className="back">
      <div className="title">Notepad</div>
      <br /><br/> <div className="list">
  {notes.map( function(note)  {
    return(
      <>
    <article key={note.text}>{note.text}</article>
    <article key={note.dia} id="daynote">{note.dia.toLocaleString('pt-BR')}</article>
    <button key={note.id} id="teste" onClick={() => filtro(note.id)}>Deletar</button>
    </>)})}</div>

</div>
  <br /><br/>
  <div className="clickers">
    <textarea id="note_text" type="text" placeholder="Digite o texto aqui"></textarea>
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



