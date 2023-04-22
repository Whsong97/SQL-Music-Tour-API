class Event extends Model {
    static associate({ Stage, StageEvent }) {
        // stages
        Event.belongsToMany(Stage, {
            foreignKey: "event_id",
            as: "stages", 
            through: StageEvent
        })
    }
}
