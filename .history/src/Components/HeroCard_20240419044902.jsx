import React, { useState, useEffect } from "react";

const HeroCard = () => {
  const [verbData, setVerbData] = useState({
    verb: "",
    description: "",
    examples: [],
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   // Fetch English Phrases from API
  //   fetch("http://localhost:8000/phrases/", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
   
  //     },
  //   })
  //     .then((response) => console.log( response.json()))
  //     .then((data) => {
  //       const randomIndex = Math.floor(Math.random() * data.length);
  //       const randomVerb = data[randomIndex].phrase;

        
  //       console.log("Random Verb: ", randomVerb);

  //       // Fetch Definition for the selected verb from dictionaryapi.dev
  //       fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomVerb}`)
  //         .then((response) => response.json())
  //         .then((definitionData) => {
  //           const description =
  //             definitionData[0]?.meanings[0]?.definitions[0]?.definition ||
  //             "Description not available for this verb";

  //           // Fetch Example Sentences for the selected verb
  //           fetch(
  //             `http://localhost:8000/api/example-sentences/?phrase=${randomVerb}`
  //           )
  //             .then((response) => response.json())
  //             .then((exampleData) => {
  //               setVerbData({
  //                 verb: randomVerb,
  //                 description: description,
  //                 examples: exampleData.map((example) => example.sentence),
  //               });
  //             })
  //             .catch((error) => {
  //               console.error("Error fetching example sentences: ", error);
  //             });
  //         })
  //         .catch((error) => {
  //           console.error("Error fetching word definition: ", error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching English phrases: ", error);
  //     });
  // }, []);

  useEffect(() => { 
    // Fetch English Phrases from API
    fetch("http://localhost:8000/phrases/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
   
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data: ", data);
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomVerb = data[randomIndex].phrase;

        // Fetch Definition for the selected verb from dictionaryapi.dev
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomVerb}`, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((definitionData) => {
            const description =
              definitionData[0]?.meanings[0]?.definitions[0]?.definition ||
              "";

            // Fetch Example Sentences for the selected verb
            fetch(
              `http://localhost:8000/examples/?phrase_id=${randomIndex}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              }
            }
            )
              .then((response) => response.json())
              .then((exampleData) => {
                console.log("Example Data: ", exampleData);
                setVerbData({
                  verb: randomVerb,
                  description: description,
                  examples: exampleData.map((example) => example),
                });
              })
              .catch((error) => {
                console.error("Error fetching example sentences: ", error);
              });
          })
          .catch((error) => {
            console.error("Error fetching word definition: ", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching English phrases: ", error);
      });
  }, []);
  const handleNext = () => {
    if (currentIndex < verbData.examples.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="card mt-6">
      <div className="card-body">
        <h2 className="card-title mb-2 font-weight-bold">
          Today's Auxiliary Verb
        </h2>
        <p className="card-text font-weight-bold text-xl">{verbData.verb}</p>
        <p className="card-text">{verbData.description}</p>
        <p className="mt-4 font-weight-bold">Example</p>
        <p className="card-text">{verbData.examples[currentIndex]}</p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button
          onClick={handlePrev}
          className="btn btn-primary"
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="btn btn-primary"
          disabled={currentIndex === verbData.examples.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
