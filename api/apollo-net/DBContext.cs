using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace apollo_net {
    public class ApolloContext: DbContext {
     
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {}
     
        public DbSet<Card> Cards {get;set;}
        public DbSet<Board> Boards {get;set;}
    }

    public class Card {
        public int Id {get;set;}
        public string Title {get;set;}
        public string Column {get;set;}
        public int BoardId {get;set;}
    }

    public class Board {
        public int Id {get;set;}
        public string Name {get;set;}

        public List<Card> Cards {get;set;}
    }
}