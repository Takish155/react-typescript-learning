// import { useState } from "react";
import "./App.css";
import ExpandableText from "./component/ExpandableText";

function App() {
  // const [showAlert, setShowAlert] = useState<boolean>(false);

  // const handleClick = (): void => {
  //   setShowAlert(!showAlert);
  // };

  // const arr: string[] = ["HTML", "CSS", "Javascript", "React", "Typescript"];

  // const handleClick = (item: string) => console.log(`${item} was clicked!`);

  return (
    <>
      <ExpandableText maxChars={10000}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero labore
        veritatis repudiandae laboriosam nisi distinctio magni illo non
        asperiores. Quidem vitae quod recusandae alias et vel saepe harum
        dolorum ullam necessitatibus dolor totam iure, cum velit nostrum,
        quibusdam ducimus aliquam pariatur, voluptatum a quis? Voluptatum
        tempore saepe iure mollitia aut quam voluptatem consequuntur eum soluta
        eveniet perferendis facere praesentium obcaecati eligendi velit
        voluptatibus impedit possimus harum veniam, ut ipsum! Unde quos
        repudiandae iusto! Atque incidunt minus maxime ratione illum iste vitae
        fugit quas cum sunt? Iure nemo quos culpa expedita, fuga eveniet veniam
        ab sit distinctio quod? Fuga dolor accusantium consequuntur corrupti
        dolorum hic, quasi velit animi laborum odio aliquam ex eius, ratione sit
        adipisci esse. Ullam facere necessitatibus autem adipisci earum delectus
        perferendis et doloribus eaque aperiam? Quasi maxime perferendis non
        numquam laudantium deserunt itaque minus? Ducimus magni eius inventore
        ea eos perferendis, aliquid minus? Hic culpa ipsam architecto maxime
        assumenda sunt voluptas est molestiae, eveniet fuga. Ad tempore
        cupiditate, ipsum error cum numquam accusamus consectetur est, ratione
        doloremque cumque minus sunt ea quod quibusdam fugit, eius dolores iste
        excepturi? Sunt commodi natus nemo nostrum tempore? Libero sint, aperiam
        incidunt provident corrupti illum, minus ad unde, at deleniti quibusdam!
      </ExpandableText>
      {/* <AlertButton handleClick={handleClick} showAlert={showAlert} />
      <Immer /> */}
    </>
  );
}

export default App;
