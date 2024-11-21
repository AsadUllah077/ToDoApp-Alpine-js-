document.addEventListener('alpine:init', () => {
    Alpine.data("dropdown", () => ({
        open: false,
        toggle() {
            this.open = !this.open;
        }
    }));
    // Alpine.store('users', () =>
    //     {
    //     user: "Asad",
    //     posts :["Post1", "Post2", "Post3"]
    // });
    Alpine.store('users', {
        user: "Asad",
        posts: ["Post1", "Post2", "Post3"]
    });
});