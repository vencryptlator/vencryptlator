const cryptoInput = document.getElementById('crypto-input');
const amountInput = document.getElementById('amount-input');
const usdOutput = document.getElementById('usd-output');
const bolivarOutput = document.getElementById('bolivar-output');
const cryptoInfo = {
  bitcoin: {
    description: 'Bitcoin (BTC): Es la criptomoneda más conocida y utilizada, creada en 2009 como una forma de pago descentralizada e independiente de los bancos. Su valor se basa en la oferta y la demanda, y es muy volátil.',
  },
  ethereum: {
    description: 'Ethereum (ETH): Es una plataforma descentralizada que permite la creación de aplicaciones descentralizadas (dApps) y contratos inteligentes mediante el uso de su propia criptomoneda, llamada Ether (ETH). Es una de las criptomonedas más populares después de Bitcoin.',
  },
  cardano: {
    description: 'Cardano (ADA): Es una plataforma blockchain que utiliza un consenso de prueba de participación para validar transacciones en su red. Su criptomoneda nativa se utiliza como medio de pago y de gobierno en la plataforma. Es conocida por su enfoque en la seguridad y la escalabilidad.',
  },
  solana: {
    description: 'Solana (SOL): Es una plataforma de contratos inteligentes de alto rendimiento que utiliza una tecnología de consenso de prueba de historial para validar transacciones en su blockchain. Es una de las criptomonedas de mayor crecimiento',
  },
  binancecoin: {
    description: 'Binance Coin (BNB): Es una criptomoneda creada por la casa de cambio Binance, que se utiliza para pagar las tarifas de transacción en su plataforma. También se puede utilizar como medio de pago en otras aplicaciones y servicios.',
  }
};

cryptoInput.addEventListener('input', () => {
  const cryptoValue = cryptoInput.value;
  const description = cryptoInfo[cryptoValue].description;
  document.getElementById('crypto-description').textContent = description;
});

amountInput.addEventListener('input', convertCryptoToUSDandBolivar);

function convertCryptoToUSDandBolivar() {
  const cryptoValue = cryptoInput.value;
  const amountValue = amountInput.value;
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cryptoValue}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const usdValue = data[0].current_price * amountValue;
      const bolivarValue = usdValue * 25.17;
      usdOutput.textContent = `$${usdValue.toFixed(2)} USD`;
      bolivarOutput.textContent = `${bolivarValue.toFixed(2)} Bs`;
    })
    .catch(error => console.log(error));
}

convertCryptoToUSDandBolivar();

