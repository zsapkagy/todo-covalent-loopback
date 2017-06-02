/* tslint:disable */

declare var Object: any;
export interface TodoInterface {
  "name": string;
  "priority"?: number;
  "done"?: boolean;
  "id"?: number;
}

export class Todo implements TodoInterface {
  "name": string;
  "priority": number;
  "done": boolean;
  "id": number;
  constructor(data?: TodoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Todo`.
   */
  public static getModelName() {
    return "Todo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Todo for dynamic purposes.
  **/
  public static factory(data: TodoInterface): Todo{
    return new Todo(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Todo',
      plural: 'Todos',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "priority": {
          name: 'priority',
          type: 'number',
          default: 0
        },
        "done": {
          name: 'done',
          type: 'boolean',
          default: false
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
