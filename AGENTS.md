<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture
- Keep this initial experience as one immersive scrolling storybook page because its visual transitions and anchored navigation form a continuous journey.
- Store presentation content and small interactive states in the page; no persistent services are required until real forms, reviews, or retailer links are supplied.
