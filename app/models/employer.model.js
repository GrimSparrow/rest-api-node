module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        position: String,
        description: String,
        about: String,
        facebook: String,
        instagram: String,
        vk: String,
        youtube:String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Employer = mongoose.model("employer", schema);
    return Employer;
  };