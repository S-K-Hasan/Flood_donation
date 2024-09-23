
function getInputFieldValueById(id){

    return parseFloat(document.getElementById(id).value);
}

function getTextFieldValueById(id){

    return parseFloat(document.getElementById(id).innerText);
}

document.getElementById('btn-donate-noakhali')
    .addEventListener('click', function(){

        const noakhaliInput = getInputFieldValueById('noakhali-box');
        const noakhaliBalance = getTextFieldValueById('noakhali-first-balance');
        const navbarBalance = getTextFieldValueById('nav-balance');

        if(noakhaliInput <= 0 || isNaN(noakhaliInput)){
            return alert('Invalid Donation amount') ;
        }

        const newBalance = noakhaliBalance + noakhaliInput;
        const navbarNewBalance = navbarBalance - noakhaliInput;

        document.getElementById('noakhali-first-balance').innerText = newBalance;
        document.getElementById('nav-balance').innerText = navbarNewBalance;

        const historyItemDiv = document.createElement('div');
        historyItemDiv.innerHTML = `
            <div class='rounded-lg border-2  p-6 space-y-2 mb-4  shadow-sm'>
            <h2 class="text-lg font-semibold">${noakhaliInput} Taka is Donated for Flood at Noakhali, Bangladesh</h2>
            <p class='bg-slate-100 p-4 rounded-lg'>Date: ${new Date().toString()}</p>
            </div>
        `;

        document.getElementById('listOfHistory').appendChild(historyItemDiv);
        document.getElementById('new-modal').showModal();
    });

    document.getElementById('btn-donate-feni')
    .addEventListener('click', function(){

        const feniInput = getInputFieldValueById('feni-box');
        const feniBalance = getTextFieldValueById('feni-first-balance');
        const navbarBalance = getTextFieldValueById('nav-balance');

        if(feniInput <= 0 || isNaN(feniInput)){
            return alert('Invalid Donation amount') ;
            
        }
        const newBalance = feniBalance + feniInput;
        const navbarNewBalance = navbarBalance - feniInput;

        document.getElementById('feni-first-balance').innerText = newBalance;
        document.getElementById('nav-balance').innerText = navbarNewBalance;

        const historyItemDiv = document.createElement('div');
        historyItemDiv.innerHTML = `
            <div class='rounded-lg border-2  p-6 space-y-2 mb-4'>
            <h2 class="text-lg font-semibold">${feniInput} Taka is Donated for Flood Relief in Feni, Bangladesh</h2>
            <p class='bg-slate-100 p-4 rounded-lg'>Date: ${new Date().toString()}</p>
            </div>
        `;

        document.getElementById('listOfHistory').appendChild(historyItemDiv);
        document.getElementById('new-modal').showModal();
    });

    document.getElementById('btn-donate-quota')
    .addEventListener('click', function(){

        const quotaInput = getInputFieldValueById('quota-box');
        const quotaBalance = getTextFieldValueById('quota-first-balance');
        const navbarBalance = getTextFieldValueById('nav-balance');

        if(quotaInput <= 0 || isNaN(quotaInput)){
            return alert('Invalid Donation amount') ;
            
        }
        const newBalance = quotaBalance + quotaInput;
        const navbarNewBalance = navbarBalance - quotaInput;

        document.getElementById('quota-first-balance').innerText = newBalance;
        document.getElementById('nav-balance').innerText = navbarNewBalance;

        const historyItemDiv = document.createElement('div');
        historyItemDiv.innerHTML = `
            <div class='rounded-lg border-2  p-6 space-y-2 mb-4'>
            <h2 class="text-lg font-semibold">${quotaInput} Taka is Donated for Aid Injured in the Quota Movement</h2>
            <p class='bg-slate-100 p-4 rounded-lg'>Date: ${new Date().toString()}</p>
            </div>
        `;

        document.getElementById('listOfHistory').appendChild(historyItemDiv);
        document.getElementById('new-modal').showModal();
    });
    const historyTab = document.getElementById('history-btn');
    const donationTab = document.getElementById('donation-btn');

    historyTab.addEventListener('click', function(){

    historyTab.classList.add('bg-[#B4F461]');
    donationTab.classList.remove('bg-[#B4F461]');

    document.getElementById('donate-container').classList.add('hidden');
    document.getElementById('history').classList.remove('hidden');
   });

    donationTab.addEventListener('click', function(){

    donationTab.classList.add('bg-[#B4F461]');
    historyTab.classList.remove('bg-[#B4F461]');

    document.getElementById('donate-container').classList.remove('hidden');
    document.getElementById('history').classList.add('hidden');
});




