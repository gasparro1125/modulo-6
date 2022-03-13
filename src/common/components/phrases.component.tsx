import React from "react";
import {TextFieldComponent} from './'

interface Props{
  items: string[];
}

export const PhraseComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    items
  } = props;

  let [phrases, setPhrases] = React.useState<string[]>(items);
  let [text, setText] = React.useState<string>("");


  React.useEffect(()=>{
      setPhrases(items)
  }),[items,phrases]

  const changesPhrases= () => {
    if(text!="") phrases.push(text)
    else console.log("error")
  };

  return (
    <>
      <ul>
        <ol>
          {phrases.map((element) => (
              <>
                <h3>{element}</h3>
              </>
          ))}
        </ol>
      </ul>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <button type="submit" onClick={changesPhrases} >Añadir</button>
    </>
  );
};
