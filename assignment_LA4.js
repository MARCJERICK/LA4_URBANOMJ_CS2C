// Initial customer queue
let customerQueue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Function to add a new customer to the queue
function addCustomer() {
    // Prompt the user to enter their name
    let name = prompt("Enter your name to join the queue:");
    // Generate the corresponding number for the customer
    let customerNumber = customerQueue.length + 1;
    // Add the customer to the queue
    customerQueue.push(name);
    // Display a message confirming the addition
    console.log(`Customer ${customerNumber}: ${name} has been added to the queue.`);
}

// Function to serve a customer from the queue
function serveCustomer() {
    // Check if there are customers left in the queue
    if (customerQueue.length > 0) {
        // Prompt the user to enter the number of the customer to be served
        let index = prompt("Enter the number of the customer to be served:");
        let position = parseInt(index) - 1;

        // Validate the entered index
        if (position >= 0 && position < customerQueue.length) {
            // Remove and serve the customer at the specified index
            let servedCustomer = customerQueue.splice(position, 1);
            // Display a message confirming the service
            console.log(`Customer ${index}: ${servedCustomer[0]} has been served.`);
        } else {
            console.log("Invalid number. Please enter a valid position.");
        }
    } else {
        console.log("No customers left to serve.");
    }
    // Display the updated queue
    displayQueue();
}

// Function to display the current queue
function displayQueue() {
    console.log("Current Queue:");
    customerQueue.forEach((customer, index) => {
        console.log(`${index + 1}. ${customer}`);
    });
}

// Main function to handle user actions
function main() {
    while (true) {
        let action = prompt("Choose an action:\n1. Add Customer\n2. Serve Customer\n3. Exit");

        if (action === '1') {
            addCustomer();
        } else if (action === '2') {
            serveCustomer();
        } else if (action === '3') {
            console.log("Goodbye!");
            break;
        } else {
            console.log("Invalid option. Please try again.");
        }
    }
}

main();
