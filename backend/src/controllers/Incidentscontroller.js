const connetion = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connetion('incidents').count();

    const incidents = await connetion('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

    response.header('X-total-Count', count['count(*)']);

    return response.json(incidents);
  },


  async create(request, response) {

    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connetion('incidents').insert({
      title,
      description,
      value,
      ong_id
    });


    return response.json({ id })

  },

  async delete(request, response) {

    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incidents = await connetion('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incidents.ong_id !== ong_id) {
      return response.status(401).json({ erro: 'error operantion not permitted' });
    }
    await connetion('incidents').where('id', id).delete();

    return response.status(204).send();


  }
};