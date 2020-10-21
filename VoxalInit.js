 // Todo list. maybe make styles away  from the console.log statement itself. More data points or addible data points?
/**
 * initalization for my projects. barfs on console
 * @param {Object} appData - Contains all app data
 * @param {string} appData.name - The name of the app
 * @param {string} appData.version - The app's version. you can add `beta` or `alpha` to make it a test version
 * @param {string[]} appData.files - All files that need to be loaded.
 * @param {string=} appData.dataStorage - Checks the localStorage for certain data. if it doesn't exist it will say so.
 */

class VoxalInit {
  constructor({ name, version, files, dataStorage }) {
    const load = (str, file) => {return `📁 File %c${file}%c loaded`};
    console.groupCollapsed("Initialization");
    console.log(
      `%c${name}\n%cBy: %cvoxal                    %cCurrent Version: %c${version}`,
      "font-size:50px; font-weight:bold;",
      "",
      "color: CadetBlue; font-style: italic;font-weight:bold;",
      "",
      "color: Crimson; font-style: italic;font-weight:bold;"
    );
    version.includes("beta") || version.includes("alpha")
      ? console.log(
          `%c App in beta or alpha. Bugs are to be expected `,
          ` padding: 1px; border-radius: 3px; background:yellow; color:#000; `
        )
      : null;
    console.log("%c███████ Initializing ███████", "font-weight:bold;");
    console.group("📁 File Loading");
    for (const file of files) {
      console.log(
        load`${file}`,
        "color:grey; font-weight:bold;",
        ""
      );
    }
    console.groupEnd();
    if (dataStorage) {
      console.log("🔍 Searching For Save");
      localStorage.getItem(dataStorage) !== null
        ? console.log("👀 Save Found!")
        : console.log("❌ No Save found");
    }
    console.groupEnd();
  }
}
