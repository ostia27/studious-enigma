function destroyPlanet()
{
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    alert("planet destroyed");
}