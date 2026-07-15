## Pipeline

Point of this note is to observe what i do in a project.  
In order to see if some structured automatic pipeline would be able to build as independant agent, to some extent.  

### Docs

First thing i did is to setup project docs witch drive context for building prompts.  

- [Example docs setup](docs-setup.md)

### Basic Task Loop

1. Define next task in `docs/_prompt.md`
2. Update `.config/prompt-map.json` with file paths
3. Generate prompt with my script, that injects template with files
4. Use it in ai chat
5. Implement result
6. Test
7. Commit

---

There is sharp, slopy and mix way to prompt.  
Sharp, would be to use single, quality prompt, that gives fit result, passing test.  
Slopy is to use prompt and ask followup questions till result fits and pass test.  
Mix is to have quality prompt that needs some followup questions.  
What to use in given situation depends on many things resources and skill.  

Sometimes i add prompt, result, or mix to docs.  
Mostly to describe project, featute or decisions and store as prompting context.  