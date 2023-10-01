fetch('videos.json')
    .then(res => res.json())
    .then((videos) =>
        document.getElementById("videos").innerHTML = videos
            .slice(0, 6).map(
                (item) =>
                    `<a href="${item.link}">
        <div class="item">
          <img class="image-reset" src="${item.image}" />
          <div class="description">
              <p class="main__title">${item.name}</p>
              <p class="sub__title">${item.title}</p>
          </div>
        </div>
      </a>
      `
            )
            .join("")
    )
fetch('videos.json')
    .then(res => res.json())
    .then((videos) =>
        document.getElementById("videos2").innerHTML = videos
            .slice(6, 12).map(
                (item) =>
                    `<a href="${item.link}">
        <div class="item">
        <img class="image-reset" src="${item.image}" />
        <div class="description">
            <p class="main__title">${item.name}</p>
            <p class="sub__title">${item.title}</p>
        </div>
        </div>
    </a>
    `
            )
            .join("")
    )

