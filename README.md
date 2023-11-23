# How to publish a npm package

Steps :

1. Create an account on npm [here](https://www.npmjs.com/login)

2. Go to the terminal and run :

```sh
npm login
```

A prompt will ask u to logthrough the browser

3. Inside the package.json file, provide at least those informations :

- name : name of the package
- version : start at 1.0.0
- main : departure file for the use of the package

4. Export an object containing your API inside your main file

5. Go to terminal, run :

```sh
npm publish
```

And that's it !
