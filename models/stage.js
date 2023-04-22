class Stage extends Model {
    static associate({ Event, StageEvent }) {
      // events
      Stage.belongsToMany(Event, {
        foreignKey: "stage_id",
        as: "events",
        through: StageEvent
      })
    }
  }
  