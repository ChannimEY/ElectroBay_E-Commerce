
      function startCountdown(durationInSeconds) {
        let remaining = durationInSeconds;

        function updateCountdown() {
          const hours = Math.floor(remaining / 3600);
          const minutes = Math.floor((remaining % 3600) / 60);
          const seconds = remaining % 60;

          document.getElementById("hours").textContent = String(hours).padStart(
            2,
            "0"
          );
          document.getElementById("minutes").textContent = String(
            minutes
          ).padStart(2, "0");
          document.getElementById("seconds").textContent = String(
            seconds
          ).padStart(2, "0");

          if (remaining > 0) {
            remaining--;
          } else {
            clearInterval(timer);
          }
        }

        updateCountdown();
        const timer = setInterval(updateCountdown, 1000);
      }

   
      startCountdown(24 * 60 * 60);