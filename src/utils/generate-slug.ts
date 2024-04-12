export function slugify(text: string): string {
    return text
        .normalize("NFD") // Normalize to decomposed Unicode (remove accents)
        .replace(/[\u0300-\u036f]/g, "") // Remove combining diacritical marks
        .toLowerCase() // Convert to lowercase
        .replace(/[^\w\s-]/g, "") // Remove non-word characters except dashes and spaces
        .replace(/\s+/g, "-") // Replace spaces with dashes
        .replace(/--+/g, "-") // Replace multiple dashes with a single dash
        .replace(/^-+/, "") // Trim dashes from the beginning
        .replace(/-+$/, ""); // Trim dashes from the end
}
