class Movie {
  constructor(argName, argYear, argDirector, argBudget, argIncome) {
    this.name = argName;
    this.year = argYear;
    this.director = argDirector;
    this.budget = argBudget;
    this.income = argIncome;
    this.getIntroduction();
    this.getProfit();
  }
  getIntroduction() {
    const introductionString = `Movie '${this.name}', release year: ${this.year}, director: ${this.director}`;
    console.log("introductionString ===", introductionString);
  }
  getProfit() {
    const profit = this.income - this.budget;
    console.log("profit ===", profit);
    return profit;
  }
  //prie Movie prideti metoda getProfitTimes() kuris grazina kiek kartu atsipirko filmas
  getProfitTimes() {
    const profitTimesPerBudget = this.getProfit() / this.budget;
    console.log("profitTimesPerBudget ===", profitTimesPerBudget);
  }
}
