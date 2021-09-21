const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

const AirdropAddress = '0xC7c6282454c7A1F697264ffc9B33c2F07b084480';
const PresaleAddress = '0xA1F0932e87Faf0836587B7e42c7B8089c79E76AF';

let web3;

if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is detected.');
}

const loadweb3 = async function () {
  try {
    web3 = new Web3(Web3.givenProvider);

    const chainId = await web3.eth.getChainId();
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

    console.log('Web3 detected, ChainId :', chainId);

    if (chainId !== 97) {
      Swal.fire('Connect Alert', 'Please connect to Binance Smart Chain Testnet', 'error');

      return;
    }

    return accounts[0];
  } catch (error) {
    if (error.code === 4001) {
      console.log('Please connect to MetaMask.');
    } else {
      console.error(error);

      Swal.fire(
        'Connect Alert',
        'Please install Metamask, or paste URL link into Trustwallet (Dapps), SafePal...',
        'error',
      );
    }
  }
};

const claimAirdrop = async function () {
  const account = await loadweb3();

  const Airdrop = new web3.eth.Contract(AirdropABI, AirdropAddress);

  const referral =
    document.getElementById('airinput').value === 'undefined' || document.getElementById('airinput').value === ''
      ? ZERO_ADDRESS
      : document.getElementById('airinput').value;

  Airdrop.methods.claim(referral).send({ from: account }, (err, res) => {
    if (!err) {
      console.log(res);
    } else {
      console.error(err);
    }
  });
};

const buystt = async () => {
  const account = await loadweb3();


  const inputValue = Number(document.getElementById('buyinput').value);

  if (inputValue >= 0.1 && inputValue <= 1) {

    web3.eth.sendTransaction({ from: account,to: PresaleAddress,  value: web3.utils.toWei(inputValue.toString(), "ether") }, (err, res) => {
      if (!err) {
        console.log(res);
      } else {
        console.error(err);
      }
    });
  } else {
    Swal.fire('Buy Alert', 'Min : 0.1 BNB and Max : 1 BNB.', 'error');
  }
};

window.onload = function () {
  function querySt(param) {
    const query = window.location.search.substring(1);
    const querySplit = query.split('&');

    for (let i = 0; i < querySplit.length; i++) {
      const queryParam = querySplit[i].split('=');
      if (queryParam[0] === param) {
        return queryParam[1];
      }
    }
  }

  const referral = querySt('ref');

  if (referral !== null) document.getElementById('airinput').value = referral;
};

function getreflink() {
  const referaladd = document.getElementById('refaddress').value;

  if (!document.getElementById('refaddress').value) {
    Swal.fire('Referral Alert', 'Please Enter You Address.', 'error');
  } else {
    if (!/^(0x){1}[0-9a-fA-F]{40}$/i.test(referaladd)) {
      Swal.fire('Referral Alert', 'Your address is not valid.', 'error');
    } else {
      document.getElementById('refaddress').value =
        'https://presale.kala.finance/?ref=' + document.getElementById('refaddress').value;
    }
  }
}

function copyToClipboard(id) {
  const text = document.getElementById(id).value; // getting the text from that particular Row
  // window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  if (window.clipboardData && window.clipboardData.setData) {
    // IE specific code path to prevent textarea being shown while dialog is visible.
    return clipboardData.setData('Text', text);
  } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
    const textarea = document.createElement('textarea');
    textarea.textContent = text;
    textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand('copy'); // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn('Copy to clipboard failed.', ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}
