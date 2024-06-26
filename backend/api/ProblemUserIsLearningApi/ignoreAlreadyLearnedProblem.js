import guard from '~/middlewares/guard';
import knex from '~/db/knex';

const ignoreAlreadyLearnedProblem = guard((r) => ['byCuilId', r.body['cuilId']])(
  async (request, response) => {
    const problemId = request.body['problemId'];
    const courseUserIsLearningId = request.body['cuilId'];

    await knex('problemUserIsLearning')
      .where({ problemId, courseUserIsLearningId })
      .update({ ifIgnored: true })

    response.success();
  }
);

export default ignoreAlreadyLearnedProblem;
