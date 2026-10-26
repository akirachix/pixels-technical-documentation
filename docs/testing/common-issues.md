# Common Issues

While working on the MvuviGo project, you may run into environment, dependency, or pipeline issues. This page documents the most common errors our team has encountered, what causes them, and how to resolve them so you can get back to building.


## 1. Backend & Python Issues

### "ModuleNotFoundError: No module named '...'"
**Cause:** You pulled the latest backend code, but your local virtual environment is missing a newly added Python package.
**Resolution:** 
1. Ensure your virtual environment is activated (you should see `(env)` in your terminal prompt).
2. Install the updated dependencies:
   ```bash
   pip install -r requirements.txt

# Frontend Common Issues

While developing the MvuviGo Web Dashboard and Mobile applications, you may run into environment, build, or dependency issues. This page documents the most common frontend errors our team has encountered, what causes them, and how to resolve them.

## Dependency & Environment Issues

### "npm install" Fails or `node_modules` are Corrupted
**Cause:** Your local `node_modules` folder or `package-lock.json` is out of sync with the `package.json`. This often happens when switching branches or pulling new code with different dependencies.
**Resolution:** Delete your existing modules and lockfile, then reinstall everything cleanly:
```bash
rm -rf node_modules package-lock.json
npm install