/**
 * Challenge:
 * As soon as the Meme component loads the first time,
 * make an API call to "https://api.imgflip.com/get_memes".
 *
 * When the data comes in, save just the memes array part
 * of that data to the `allMemes` state
 *
 * Think about if there are any dependencies that, if they
 * changed, you'd want to cause to re-run this function.
 *
 * Hint: for now, don't try to use an async/await function.
 * Instead, use `.then()` blocks to resolve the promises
 * from using `fetch`. We'll learn why after this challenge.
 */

import { useEffect, useState } from "react";

export default function Meme() {
  const [memeImage, setMeme] = useState({
    topText: "",
    bottomText: "",
    url: "",
  });

  const [allMemes, setAllMemes] = useState([]);

  // Function to generate random number
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    if (topText || bottomText) {
      const memeUrl = allMemes[randomNumber(0, allMemes.length)].url;
      setMeme((prev) => ({
        ...prev,
        url: memeUrl,
      }));
    }
  };

  const { topText, bottomText } = memeImage;

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  return (
    <main>
      <div className="form">
        <div className="form--inputs">
          <div className="form--control">
            <label htmlFor="topText" className="form--label">
              Top text
            </label>
            <input
              type="text"
              id="topText"
              className="form--input"
              placeholder="Shut up"
              name="topText"
              value={topText}
              onChange={handleChange}
            />
          </div>
          <div className="form--control">
            <label htmlFor="bottomText" className="form--label">
              Bottom text
            </label>
            <input
              type="text"
              id="bottomText"
              className="form--input"
              placeholder="And take my money"
              name="bottomText"
              value={bottomText}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="form--button" onClick={() => handleSubmit()}>
          Get a new meme image 🖼
        </button>
      </div>
      {memeImage.url && (
        <div className="meme">
          <img src={memeImage.url} className="meme--image" />
          <h2 className="meme--text top">{topText}</h2>
          <h2 className="meme--text bottom">{bottomText}</h2>
        </div>
      )}
    </main>
  );
}
