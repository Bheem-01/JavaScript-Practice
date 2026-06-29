/* Create two functions:
downloadFile();
readFile();
Each should return a Promise.
Use:
await downloadFile();
await readFile();
Observe that the second function starts only after the first one finishes.*/

// Download the file after 2 seconds.

async function downloadFile() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("File downloaded");
        }, 2000);

    });
}

// Read the file after 2 seconds.

async function readFile() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("File read");
        }, 2000);

    });
}

// Main function to execute both tasks one after another.

async function main() {

    // Wait until the file is downloaded.
    let downloadResult = await downloadFile();
    console.log(downloadResult);

    // Wait until the file is read.
    let readResult = await readFile();
    console.log(readResult);

}

// Start the program.

main();


