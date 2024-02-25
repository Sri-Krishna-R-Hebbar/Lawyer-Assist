// document.getElementsByClassName('.slider-lawyer').addEventListener('toggle', function(){
//     document.querySelector('container-client').style = `transform: translateY(-100%);
//     transition: 1s;`;
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const switchLawyer = document.querySelector(".switch-lawyer input");
//     const containerLawyer = document.getElementById("container-lawyer");
//     const containerClient = document.getElementById("container-client");

//     switchLawyer.addEventListener("change", function() {
//         if (switchLawyer.checked) {
//             // If the switch is checked, show the Client section
//             containerLawyer.style.display = "none";
//             containerClient.style.display = "grid";
//         } else {
//             // If the switch is unchecked, show the Lawyer section
//             containerLawyer.style.display = "grid";
//             containerClient.style.display = "none";
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const switchLawyer = document.querySelector(".switch-lawyer input");
//     const containerLawyer = document.getElementById("container-lawyer");
//     const containerClient = document.getElementById("container-client");

//     switchLawyer.addEventListener("change", function() {
//         if (switchLawyer.checked) {
//             // If the switch is checked, show the Client section
//             containerLawyer.style.opacity = "0";
//             containerLawyer.style.height = "0";

//             setTimeout(function() {
//                 containerLawyer.style.display = "none";
//                 containerClient.style.display = "grid";
//                 containerClient.style.opacity = "1";
//                 containerClient.style.height = "100%";
//             }, 500); // Adjust the duration based on your transition time
//         } else {
//             // If the switch is unchecked, show the Lawyer section
//             containerClient.style.opacity = "0";
//             containerClient.style.height = "0";

//             setTimeout(function() {
//                 containerClient.style.display = "none";
//                 containerLawyer.style.display = "grid";
//                 containerLawyer.style.opacity = "1";
//                 containerLawyer.style.height = "100%";
//             }, 500); // Adjust the duration based on your transition time
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const switchLawyer = document.querySelector(".switch-lawyer input");
    const containerLawyer = document.getElementById("container-lawyer");
    const containerClient = document.getElementById("container-client");

    switchLawyer.addEventListener("change", function() {
        if (switchLawyer.checked) {
            // If the switch is checked, show the Client section
            hideContainer(containerLawyer, function() {
                showContainer(containerClient);
            });
        } else {
            // If the switch is unchecked, show the Lawyer section
            hideContainer(containerClient, function() {
                showContainer(containerLawyer);
            });
        }
    });

    function hideContainer(container, callback) {
        container.style.opacity = "0";
        container.style.height = "0";

        setTimeout(function() {
            container.style.display = "none";
            callback();
        }, 100); // Adjust the duration based on your transition time
    }

    function showContainer(container) {
        container.style.display = "grid";
        setTimeout(function() {
            container.style.opacity = "1";
            container.style.height = "100%";
        }, 100);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const switchClient = document.querySelector(".switch-client input");
    const containerClient = document.getElementById("container-client");
    const containerLawyer = document.getElementById("container-lawyer");

    switchClient.addEventListener("change", function() {
        if (switchClient.checked) {
            // If the switch is checked, show the Client section
            hideContainer(containerClient, function() {
                showContainer(containerLawyer);
                
            });
        } else {
            // If the switch is unchecked, show the Lawyer section
            hideContainer(containerLawyer, function() {
                showContainer(containerClient);
            });
        }
    });

    function hideContainer(container, callback) {
        container.style.opacity = "0";
        container.style.height = "0";

        setTimeout(function() {
            container.style.display = "none";
            callback();
        }, 100); // Adjust the duration based on your transition time
    }

    function showContainer(container) {
        container.style.display = "grid";
        setTimeout(function() {
            container.style.opacity = "1";
            container.style.height = "100%";
        }, 100);
    }
});

