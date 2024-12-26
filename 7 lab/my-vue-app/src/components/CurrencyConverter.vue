<template>
    <div>
      <h1>Конвертер валют</h1>
      <input v-model="amount" placeholder="Сумма" id="amount"/>
      <select v-model="currency" id="cur1">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="RUB">RUB</option>
        <option value="AED">AED</option>
        <option value="BGN">BGN</option>
      </select>

      <input v-model="amount" disabled placeholder="В" />
      <select v-model="currency" id="cur2">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="RUB">RUB</option>
        <option value="AED">AED</option>
        <option value="BGN">BGN</option>
      </select>

      <button @click="convertCurrency">Конвертировать</button>
      <div v-if="res">
        <p>Результат: {{ res.conversion_result }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        res: null
      };
    },
    methods: {
      convertCurrency() {
        const URL = "https://v6.exchangerate-api.com/v6/";
        const KEY = "77d47c0f834e9fdbbf80b665";
        const cur1 = document.getElementById("cur1").value;
        const cur2 = document.getElementById("cur2").value;
        const amount = document.getElementById("amount").value;
        fetch(`${URL}${KEY}/pair/${cur1}/${cur2}/${amount}/`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.res = {
              result: data.result,
              conversion_result: data.conversion_result,
            };
        });
      },
    },
  };
  </script>