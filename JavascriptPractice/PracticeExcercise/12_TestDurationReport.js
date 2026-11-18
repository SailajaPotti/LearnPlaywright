class testDurationReport{
    static rows = 0;
    static sum=0;
    constructor(lines, rows){
        this.rows = rows; 
        this.lines = lines;
    }

    getTotalCount(){
            for(let i=1;i<=store.rows;i++){
                testDurationReport.sum=testDurationReport.sum+ parseInt(lines[i].substring(lines[i].lastIndexOf(" ")+1), 10);
            }
            return testDurationReport.sum;
        }
        getSlowestTest(){
            let arr=[];
            let tests = new Map();
            for(let i=1;i<=store.rows;i++){
                arr.push(parseInt(lines[i].substring(lines[i].lastIndexOf(" ")+1), 10));
                tests.set(lines[i].substring(0, lines[i].lastIndexOf(" ")) , 
                parseInt(lines[i].substring(lines[i].lastIndexOf(" ")), 10));
            }
            arr.sort((a,b)=>b-a);
            for (const [key, value] of tests.entries()) {
               
                if (value === arr[0]) {
                    
                return key;
            }
        }
        return "udd"
}
}

        const input = require('fs').readFileSync(0, 'utf8');
        const lines = input.trim().split('\n');
        
        let store = new testDurationReport(lines, parseInt(lines[0], 10));
        store.getTotalCount();
        console.log("Total: "+testDurationReport.sum+" ms");
        
        console.log("Slowest: "+store.getSlowestTest())

        