const moonLandingFacts = [
    "The first successful manned moon landing was on July 20, 1969, during NASA's Apollo 11 mission.",
    "Neil Armstrong was the first human to set foot on the moon, followed by Buzz Aldrin, while Michael Collins orbited above in the command module.",
    "Neil Armstrong's first words after stepping on the moon were, 'That's one small step for [a] man, one giant leap for mankind.'",
    "The Apollo 11 astronauts left several items on the moon, including a U.S. flag, a patch honoring the fallen Apollo 1 crew, and a plaque that reads, 'We came in peace for all mankind.'",
    "The lunar module used by Armstrong and Aldrin was named 'Eagle.'",
    "The entire Apollo 11 mission lasted just over 8 days, from launch to splashdown on Earth.",
    "Moon rocks collected during the Apollo 11 mission have helped scientists learn about the moon's composition and geological history.",
    "The Apollo 11 mission was watched by an estimated 600 million people worldwide, making it one of the largest television audiences in history.",
    "The technology and techniques developed for the Apollo moon missions also led to advancements in various fields such as computer technology and telecommunications.",
    "Apollo 11 left behind instruments on the moon to conduct various experiments, including seismometers to detect moonquakes and retroreflectors for laser ranging."
  ];


  function randomFact() {
    return moonLandingFacts[Math.floor(Math.random() * moonLandingFacts.length)]
  }
