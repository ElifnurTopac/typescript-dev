// Soru3.ts

class Logger {
  private logHistory: string[] = [];

  log(message: string) {
    this.logHistory.push(message);
  }

  printHistory() {
    console.log(this.logHistory);
  }
}

const logger = new Logger();
logger.log("Start");
logger.log("Processing");
logger.log("End");

logger.printHistory();
// Beklenen çıktı: ["Start", "Processing", "End"]
