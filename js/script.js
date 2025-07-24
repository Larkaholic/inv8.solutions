// // Toggle solution and FAQ descriptions
// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('.bg-[#0F38C5] .grid > div').forEach(card => {
//         const header = card.querySelector('h3');
//         const button = card.querySelector('button');
//         // Only toggle the first <p> inside the card
//         const desc = card.querySelector('p');
//         const caret = button.querySelector('i');
//         function toggle() {
//             if (desc) desc.classList.toggle('hidden');
//             if (caret) caret.classList.toggle('rotate-180');
//         }
//         if (header) header.addEventListener('click', toggle);
//         if (button) button.addEventListener('click', toggle);
//     });
// });
