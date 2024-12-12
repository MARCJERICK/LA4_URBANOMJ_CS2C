// Initial customer hash table (object) with indices and customer names
let customerHashTable = {
    1: "Elaine",
    2: "Althea",
    3: "Angelo",
    4: "Lito",
    5: "Engelbert"
};

// Function to add a new customer to the hash table
function addCustomer() {
    // Prompt the user to enter their name
    let name = prompt("Enter your name to join the queue:");
    // Generate a new index based on the current length of the hash table
    let newIndex = Object.keys(customerHashTable).length + 1;
    // Add the customer to the hash table with the new index
    customerHashTable[newIndex] = name;
    // Display a confirmation message
    console.log(`Customer ${newIndex}: ${name} has been added to the hash table.`);
}

// Function to serve a customer from the hash table
function serveCustomer() {
    // Check if there are customers left in the hash table
    if (Object.keys(customerHashTable).length > 0) {
        // Prompt the user to enter the number of the customer to be served
        let index = prompt("Enter the number of the customer to be serviced:");
        let position = parseInt(index);

        // Validate the entered index
        if (customerHashTable[position]) {
            // Retrieve and delete the customer from the hash table
            let servedCustomer = customerHashTable[position];
            delete customerHashTable[position];
            // Display a confirmation message
            console.log(`Customer ${index}: ${servedCustomer} has been served.`);
        } else {
            console.log("Invalid number. Please enter a valid index.");
        }
    } else {
        console.log("No customers left to serve.");
    }
    // Display the updated hash table
    displayHashTable();
}

// Function to display the current hash table
function displayHashTable() {
    console.log("Current Hash Table:");
    // Iterate through each key-value pair in the hash table
    for (let key in customerHashTable) {
        console.log(`${key}. ${customerHashTable[key]}`);
    }
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
