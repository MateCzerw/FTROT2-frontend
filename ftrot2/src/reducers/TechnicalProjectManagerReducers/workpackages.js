import { uuid } from "uuidv4";
import moment from "moment";
import {
  CREATE_WORKPACKAGE,
  EDIT_WORKPACKAGE,
  DELETE_WORKPACKAGE,
} from "../../actions/types";

const initialState = {
  workpackages: [
    {
      id: uuid(),
      name: "HMC",
      tasksQuantity: 5,
      finishedTasks: 3,
      endDate: moment(Date.now()).calendar(),
      predictedFinish: moment(Date.now()).calendar(),
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quas illum sit qui atque quam nam repellat asperiores ut laboriosam odit, suscipit aliquam optio velit doloribus alias tenetur dolorum explicabo.
        Fugit ducimus soluta tempora aspernatur asperiores autem, quasi animi doloribus tempore sapiente dolorum adipisci, quisquam ex totam eaque? Ipsam ut culpa dicta quaerat animi, fugiat quos at voluptatum unde ea!
        Culpa tempora, error voluptatum maxime quod quibusdam ut amet nisi architecto qui. Laudantium, maiores amet. Aspernatur saepe assumenda quibusdam magni odio neque voluptas sit explicabo incidunt. Dolorem eveniet officia voluptas?
        Laudantium ullam, reprehenderit officiis numquam earum sapiente tempora eveniet, ex quas illo nisi ipsam error rerum exercitationem perspiciatis non expedita, cum accusamus! Illum libero consequuntur, vitae repellat modi error architecto.
        Soluta dolorem vel tempore id neque quam non. Alias, veniam nam, commodi inventore numquam voluptatem, mollitia necessitatibus modi labore perspiciatis quis provident animi quae excepturi fuga praesentium distinctio temporibus quasi.
        Officiis cum dolorum commodi consectetur porro mollitia rerum corrupti facilis numquam architecto magni debitis, minima incidunt libero quos aliquid accusamus ipsam dicta quam, corporis repellat? Ratione corrupti similique praesentium illo.
        Inventore, facilis. Doloribus incidunt iusto libero, atque magnam illo cupiditate, magni quos, repudiandae vel quia. Inventore doloribus corrupti neque earum, nesciunt iure facilis veniam aliquid quod voluptatum qui vitae architecto.
        Fugit veritatis provident, asperiores repellendus eaque iusto minus atque libero hic sequi debitis molestiae dignissimos id blanditiis ipsam beatae, quae optio! Optio iste aperiam, consectetur impedit nostrum praesentium laudantium molestias!
        Ipsam possimus odit culpa! Libero sint expedita, nostrum et dignissimos aut amet laboriosam, quis suscipit recusandae maiores vel, asperiores quaerat eligendi! Inventore sed eveniet eum itaque nesciunt delectus dignissimos repellat.
        Quasi quam non perferendis temporibus distinctio repellat excepturi quisquam sit eius dolorem sunt iste repellendus, nemo eum, quidem doloremque, aut exercitationem. Reprehenderit, dolor. Corrupti eos et ipsa cumque quibusdam excepturi!`,
    },
    {
      id: uuid(),
      name: "Volvo",
      tasksQuantity: 5,
      finishedTasks: 3,
      endDate: moment(Date.now()).calendar(),
      predictedFinish: moment(Date.now()).calendar(),
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quas illum sit qui atque quam nam repellat asperiores ut laboriosam odit, suscipit aliquam optio velit doloribus alias tenetur dolorum explicabo.
        Fugit ducimus soluta tempora aspernatur asperiores autem, quasi animi doloribus tempore sapiente dolorum adipisci, quisquam ex totam eaque? Ipsam ut culpa dicta quaerat animi, fugiat quos at voluptatum unde ea!
        Culpa tempora, error voluptatum maxime quod quibusdam ut amet nisi architecto qui. Laudantium, maiores amet. Aspernatur saepe assumenda quibusdam magni odio neque voluptas sit explicabo incidunt. Dolorem eveniet officia voluptas?
        Laudantium ullam, reprehenderit officiis numquam earum sapiente tempora eveniet, ex quas illo nisi ipsam error rerum exercitationem perspiciatis non expedita, cum accusamus! Illum libero consequuntur, vitae repellat modi error architecto.
        Soluta dolorem vel tempore id neque quam non. Alias, veniam nam, commodi inventore numquam voluptatem, mollitia necessitatibus modi labore perspiciatis quis provident animi quae excepturi fuga praesentium distinctio temporibus quasi.
        Officiis cum dolorum commodi consectetur porro mollitia rerum corrupti facilis numquam architecto magni debitis, minima incidunt libero quos aliquid accusamus ipsam dicta quam, corporis repellat? Ratione corrupti similique praesentium illo.
        Inventore, facilis. Doloribus incidunt iusto libero, atque magnam illo cupiditate, magni quos, repudiandae vel quia. Inventore doloribus corrupti neque earum, nesciunt iure facilis veniam aliquid quod voluptatum qui vitae architecto.
        Fugit veritatis provident, asperiores repellendus eaque iusto minus atque libero hic sequi debitis molestiae dignissimos id blanditiis ipsam beatae, quae optio! Optio iste aperiam, consectetur impedit nostrum praesentium laudantium molestias!
        Ipsam possimus odit culpa! Libero sint expedita, nostrum et dignissimos aut amet laboriosam, quis suscipit recusandae maiores vel, asperiores quaerat eligendi! Inventore sed eveniet eum itaque nesciunt delectus dignissimos repellat.
        Quasi quam non perferendis temporibus distinctio repellat excepturi quisquam sit eius dolorem sunt iste repellendus, nemo eum, quidem doloremque, aut exercitationem. Reprehenderit, dolor. Corrupti eos et ipsa cumque quibusdam excepturi!`,
    },
    {
      id: uuid(),
      name: "BMC",
      tasksQuantity: 5,
      finishedTasks: 3,
      endDate: moment(Date.now()).calendar(),
      predictedFinish: moment(Date.now()).calendar(),
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quas illum sit qui atque quam nam repellat asperiores ut laboriosam odit, suscipit aliquam optio velit doloribus alias tenetur dolorum explicabo.
        Fugit ducimus soluta tempora aspernatur asperiores autem, quasi animi doloribus tempore sapiente dolorum adipisci, quisquam ex totam eaque? Ipsam ut culpa dicta quaerat animi, fugiat quos at voluptatum unde ea!
    `,
    },
  ],
};

const workpackagesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_WORKPACKAGE:
      return {
        ...state,
        workpackages: [...state.workpackages, payload.workpackage],
      };
    case EDIT_WORKPACKAGE:
      return {
        ...state,
        workpackages: state.workpackages.map((item) => {
          if (item.id === payload.id) return payload.workpackage;
          else return item;
        }),
      };
    case DELETE_WORKPACKAGE:
      return {
        ...state,
        workpackages: state.workpackages.filter(
          (item) => item.id !== payload.id
        ),
      };

    default:
      return state;
  }
};

export default workpackagesReducer;
