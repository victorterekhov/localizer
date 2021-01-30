 // For simplicity here all the locales are kept in this array. In real-life project the data can be fetched from a JSON object or DB.
      const localization = [
        {
          name: "Victor Terekhov",
          title: "PhD, LL.M",
          interests: "Private Law, Civil Procedure, TechLaw",
          contact: "Contacts",
        },
        {
          name: "Виктор Терехов",
          title: "Доктор права (PhD), LL.M",
          interests: "Частное право, гражданский процесс, право и технологии",
          contact: "Контакты",
        },
        {
          name: "Viktoras Terechovas",
          title: "Teises mokslo daktaras (PhD), LL.M",
          interests: "Privatinė teisė, Civilinis procesas, Technologijų teisė",
          contact: "Kontaktai",
        },
      ];

      // Select all the elements of the page for which we need localization. Here I do it manually, but you may think of a loop that could grab all the elements via their -data attributes and put them in separate variables
      const name = document.getElementById("name");
      const title = document.getElementById("title");
      const interests = document.getElementById("interests");
      const contact = document.getElementById("contact");
      // Important - here I put all these elements into an array, so that later I could loop over it and apply the necessary language settings
      const textElements = [name, title, interests, contact];

      // Selecting a 'switcher' element on a web page. In my case it is a <select> element with an id of 'locale'
      let local = document.getElementById("locale");

      // Now let's react to the changes in <select> element and see which <option> has been chosen
      let currentLang = null;
      local.addEventListener("change", function () {
        switch (this.value) {
          case "en":
            currentLang = 0;
            break;
          case "ru":
            currentLang = 1;
            break;
          case "lt":
            currentLang = 2;
            break;
          default:
            currentLang = 0;
        }

        // OK, so now let's loop over textElements and give relevant content to each element on the page
        textElements.forEach(function (el) {
          let prop = el.getAttribute("id");
          el.innerHTML = localization[currentLang][prop];
        });
      });