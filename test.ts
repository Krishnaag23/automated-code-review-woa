class ComplexProcessor {
  private data: any[];

  constructor(data: any[]) {
    this.data = data || [];
  }

  processData(): any {
    let result: any = {};
    for (let i = 0; i < this.data.length; i++) {
      let item = this.data[i];
      if (item) {
        if (typeof item === 'object') {
          if (item.hasOwnProperty('id')) {
            if (!result[item.id]) {
              result[item.id] = [];
            }
            if (Array.isArray(item.values)) {
              for (let j = 0; j < item.values.length; j++) {
                if (typeof item.values[j] === 'number') {
                  if (item.values[j] > 0) {
                    if (item.values[j] % 2 === 0) {
                      result[item.id].push(item.values[j] * 2);
                    } else {
                      result[item.id].push(item.values[j] * 3);
                    }
                  } else {
                    result[item.id].push(0);
                  }
                } else {
                  result[item.id].push('NaN');
                }
              }
            } else {
              result[item.id].push(null);
            }
          } else {
            result['unknown'] = result['unknown'] || [];
            result['unknown'].push(item);
          }
        } else {
          if (typeof item === 'string') {
            if (item.length > 5) {
              result[item] = item.split('').reverse().join('');
            } else {
              result[item] = item.toUpperCase();
            }
          } else {
            result['misc'] = result['misc'] || [];
            result['misc'].push(item);
          }
        }
      }
    }
    return result;
  }
}

const input = [
  { id: 'a', values: [1, 2, 3, 'x'] },
  { id: 'b', values: [-1, 4, 7, null] },
  'hello',
  42,
  { id: 'c', values: [5, 6, 'y', 8] },
  null,
  undefined,
  true
];

const processor = new ComplexProcessor(input);
console.log(processor.processData());
