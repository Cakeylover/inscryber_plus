import { Transformation } from "../transformation";

export class SigilsTransformation extends Transformation {
  constructor(value, _type) {
    super(value, "sigils");
  }

  toString() {
    console.log("[SigilsTransformation] Generating transformation string");

    if (this.value.length === 0) return "";

    // Single sigils are larger and central than multiple sigils
    if (this.value.length === 1)
      return `l_Inscryber:Sigils:v1:${this.value[0].value}/t_sigil/`;

    // Add transformation for each sigil. Transformations
    // are named in Cloudinary in the form sigil_x
    let transformation = "";

    this.value.forEach((s, i) => {
      transformation += `l_Inscryber:Sigils:v1:${s}/t_v1_sigil_${++i}/`;
    });

    return transformation;
  }
}
