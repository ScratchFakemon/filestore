// This script takes the existing Iframe TurboWarp extension and modifies it to remove the security popups (they can be annoying in the editor).
// Note that, if the extension undergoes massive changes, patched code may no longer work.
// For things like iframe terminals and browsers, this is fine because the user is already the one initiating the iframe by sending commands or specifying a URL to visit; in this case, the popups are redundant.
// However, the code produced by this script should NOT be used without a prior layer of consent from the user.
const iframeLocation =
  "https://raw.githubusercontent.com/TurboWarp/extensions/master/extensions/iframe.js";
const iframeExtRes = await fetch(iframeLocation);
const iframeExt = await iframeExtRes.text();
let iframePatched = iframeExt
  .replaceAll("await Scratch.canEmbed(URL)", "true")
  .replaceAll("await Scratch.canEmbed(url)", "true")
  .replaceAll("// Name: Iframe", "// Name: Iframe (MOD)")
  .replaceAll(
    "// Description: Display webpages or HTML over the stage.",
    "// Description: A modified version of TurboWarp's existing Iframe extension that removes the warning popups for a more seamless experience. Allowing this extension to run unsandbox effectively allows ANY website or custom HTML to be displayed by the project. By approving this extension, you hereby consent to any iframe being displayed by the project.",
  )
  .replaceAll(
    `name: Scratch.translate("Iframe")`,
    `name: Scratch.translate("Iframe (MOD)")`,
  );
console.log(iframePatched);
