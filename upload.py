import subprocess
import shutil
import os
import sys

import colorama


def red(text):
    return colorama.Fore.RED + text + colorama.Style.RESET_ALL


def green(text):
    return colorama.Fore.GREEN + text + colorama.Style.RESET_ALL


if __name__ == "__main__":
    colorama.init()

    if not shutil.which("git"):
        print(red("Git could not be found, exiting"))
        sys.exit()

    if not shutil.which("npm"):
        print(red("NPM could not be found, exiting"))
        sys.exit()

    # Change to the master branch
    print(green("Changing to the development branch..."))
    subprocess.call(["git", "checkout", "development"], shell=True)

    # Build the site
    print(green("Building the site..."))
    subprocess.call(["npm", "run", "prod"], shell=True)

    # Change to the GitHub Pages branch
    print(green("Checking out the master branch..."))
    subprocess.call(["git", "checkout", "master"], shell=True)

    # Move the files out of dist/
    print(green("Moving the files..."))
    files = os.listdir("dist")
    for f in files:
        shutil.move("dist/" + f, f)

    subprocess.call(["git", "add", "."], shell=True)

    # Commit the built files
    print(green("Committing the files..."))
    subprocess.call(["git", "commit", "-a", "-m", "Rebuilt site"], shell=True)

    # Delete the built files
    # print("Deleting the files...")
    # for f in files:
    #     os.remove(f)

    # Pushing to the GitHub Pages branch
    print(green("Pushing the changes"))
    subprocess.call(["git", "push", "origin", "master"], shell=True)

    # Change to the master branch
    print(green("Changing back to the development branch..."))
    subprocess.call(["git", "checkout", "development"], shell=True)

    print(green("Finished uploading the site, exiting"))
