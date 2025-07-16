import React, { useEffect } from "react";
import TypeIt from "typeit";

const WelcomeMessage = () => {
  useEffect(() => {
    const instance = new TypeIt("#typeit-element", {
      lifeLike: false,
      speed: 0
    })
      .type("W")
      .pause(775)
      .type("e")
      .pause(224)
      .type("l")
      .pause(876)
      .type("c")
      .pause(172)
      .type("o")
      .pause(79)
      .type("m")
      .pause(127)
      .type("e")
      .pause(107)
      .type(" ")
      .pause(415)
      .type("t")
      .pause(154)
      .type("o")
      .pause(310)
      .type(" ")
      .pause(212)
      .type("t")
      .pause(132)
      .type("h")
      .pause(109)
      .type("i")
      .pause(633)
      .type("s")
      .pause(103)
      .type(" ")
      .pause(195)
      .type("s")
      .pause(110)
      .type("i")
      .pause(116)
      .type("d")
      .pause(137)
      .type("e")
      .pause(133)
      .type(" ")
      .pause(312)
      .type("o")
      .pause(164)
      .type("f")
      .pause(126)
      .type(" ")
      .pause(266)
      .type("t")
      .pause(160)
      .type("h")
      .pause(115)
      .type("e")
      .pause(91)
      .type(" ")
      .pause(176)
      .type("i")
      .pause(66)
      .type("n")
      .pause(389)
      .type("t")
      .pause(223)
      .type("e")
      .pause(194)
      .type("r")
      .pause(103)
      .type("n")
      .pause(94)
      .type("e")
      .pause(178)
      .type("t")
      .pause(512)
      .type(",")
      .pause(113)
      .type(" ")
      .pause(330)
      .type("w")
      .pause(213)
      .type("a")
      .pause(299)
      .type("n")
      .pause(354)
      .type("d")
      .pause(207)
      .type("e")
      .pause(295)
      .type("r")
      .pause(228)
      .type("e")
      .pause(409)
      .type("r")
      .pause(613)
      .type("!")
      .go();

    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <div>
      <span id="typeit-element"></span>
    </div>
  );
};

export default WelcomeMessage;
