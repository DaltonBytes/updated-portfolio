export const earthyTheme = {
  plain: {
    backgroundColor: "#1E2320",
    color: "#E8DCC2",
    fontSize: "0.95rem",
    fontFamily: "'Fira Code', Consolas, monospace",
  },

  styles: [
    // Comments
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#6F7B65", fontStyle: "italic" },
    },

    // Punctuation / braces
    {
      types: ["punctuation"],
      style: { color: "#C5C6B3" },
    },

    // Keywords + operators
    {
      types: ["keyword", "operator"],
      style: { color: "#A3B18A", fontWeight: 600 },
    },

    // Strings
    {
      types: ["string", "char", "attr-value"],
      style: { color: "#E6CFA9" },
    },

    // Numbers, constants
    {
      types: ["number", "boolean", "constant"],
      style: { color: "#D4A574" },
    },

    // Functions
    {
      types: ["function"],
      style: { color: "#CBA46A", fontWeight: 600 },
    },

    // Class names
    {
      types: ["class-name"],
      style: { color: "#E8DCC2", fontWeight: 600 },
    },

    // Variables
    {
      types: ["variable"],
      style: { color: "#E3D6BB" },
    },

    // Tags (HTML)
    {
      types: ["tag"],
      style: { color: "#DEC49A" },
    },

    // Regex
    {
      types: ["regex"],
      style: { color: "#D4A574" },
    },

    // Important
    {
      types: ["important"],
      style: { color: "#E8DCC2", fontWeight: "bold" },
    },
  ],
};
